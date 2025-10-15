import { testimonials } from '@/lib/data'
import { Star } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'

const TestimonialSection = () => {
  return (
    <section
        id="testimonials"
        className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="gradient-text-primary">What creators say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonials, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg card-glass"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    &quot;{testimonials.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      {/* <Image
                        src={`https://images.unsplash.com/photo-${testimonials.imageId}?w=100&h=100&fit=crop&crop=face`}
                        alt={testimonials.name}
                        fill
                        className="rounded-full border-2 border-gray-700 object-cover"
                        sizes="48px"
                      /> */}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials.role}
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        {testimonials.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  )
}

export default TestimonialSection
