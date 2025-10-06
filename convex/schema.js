import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
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

    posts:defineTable({
      title: v.string(),
      content: v.string(),
      status : v.union(v.literal("draft"), v.literal("published")),

      // Author relationship
      authorId: v.id("users"),
      

      // content metadata
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
    .index("by_published", ["status","publishedAt"])
    .index("by_author_status",["authorId", "status"])
    .searchIndex("search_content", { searchField: "title" }),

// for comments and likes on posts
    comments:defineTable({
      postId: v.id("posts"),
      authorId: v.id("users"), //optional for anonymous comments
      authorName: v.string(), // for anonymous or display name 
      authorEmail: v.optional(v.string()),  // for anonymous comments


      content: v.string(),
      status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
      

      // Timestamps
      createdAt: v.number(),
      updatedAt: v.number(),
    })
    .index("by_post", ["postId"])
    .index("by_post_status",["postId", "status"])
    .index("by_author", ["authorId"]),

// likes table to track which user liked which post
  likes:defineTable({
      postId: v.id("posts"),
      userId: v.id("users"),  //optional for anonymous likes
        
  
        // Timestamps
      createdAt: v.number(),
  })
  .index("by_post", ["postId"])
  .index("by_user", ["userId"])
  .index("by_post_user", ["postId", "userId"]),

// followers table to track user followers
  follows:defineTable({
    followerId: v.id("users"),
    followingId: v.id("users"),

    // Timestamps
    createdAt: v.number(),
  })
  .index("by_follower", ["followerId"])
  .index("by_following", ["followingId"])
  .index("by_follower_following", ["followerId", "followingId"]),


    // dailyStats table to track daily stats for posts and users
    dailyStats:defineTable({
      postId: v.id("posts"),
      date: v.string(), // YYYY-MM-DD format
      views: v.number(),


      createdAt:v.number(),
      updatedAt:v.number(),
    })
    .index("by_post_date", ["postId", "date"])
    .index("by_date", ["date"])
    .index("by_post_date", ["postId", "date"]), //unique constraint

  });

