import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ---------------- USERS TABLE ----------------
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.optional(v.string()),
    username: v.string(),
    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_username", ["username"])
    .index("by_email", ["email"])
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }),

  // ---------------- POSTS TABLE ----------------
  posts: defineTable({
    title: v.string(),
    content: v.string(),
    status: v.union(v.literal("draft"), v.literal("published")),

    // Author relationship
    authorId: v.id("users"),

    // Content metadata
    tags: v.array(v.string()),
    category: v.optional(v.string()),
    featuredImage: v.optional(v.string()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
    publishedAt: v.optional(v.number()),

    // Analytics
    ViewCount: v.number(),
    likeCount: v.number(),
  })
    .index("by_author", ["authorId"])
    .index("by_status", ["status"])
    .index("by_published", ["status", "publishedAt"])
    .index("by_author_status", ["authorId", "status"])
    .searchIndex("search_content", { searchField: "title" }),

  // ---------------- COMMENTS TABLE ----------------
  comments: defineTable({
    postId: v.id("posts"),
    authorId: v.id("users"), // optional for anonymous comments
    authorName: v.string(), // for anonymous or display name
    authorEmail: v.optional(v.string()), // for anonymous comments
    content: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected")
    ),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_post", ["postId"])
    .index("by_post_status", ["postId", "status"])
    .index("by_author", ["authorId"]),

  // ---------------- LIKES TABLE ----------------
  likes: defineTable({
    postId: v.id("posts"),
    userId: v.id("users"), // optional for anonymous likes

    // Timestamps
    createdAt: v.number(),
  })
    .index("by_post", ["postId"])
    .index("by_user", ["userId"])
    .index("by_post_user", ["postId", "userId"]),

  // ---------------- FOLLOWS TABLE ----------------
  follows: defineTable({
    followerId: v.id("users"),
    followingId: v.id("users"),

    // Timestamps
    createdAt: v.number(),
  })
    .index("by_follower", ["followerId"])
    .index("by_following", ["followingId"])
    .index("by_follower_following", ["followerId", "followingId"]),

  // ---------------- DAILYSTATS TABLE ----------------
  dailyStats: defineTable({
    postId: v.id("posts"),
    date: v.string(), // YYYY-MM-DD format
    views: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_post_date", ["postId", "date"]) // ✅ keep this one
    .index("by_date", ["date"]), // ✅ fine (removed duplicate index)
});
