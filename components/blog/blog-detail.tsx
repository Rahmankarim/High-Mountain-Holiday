"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { type BlogPost, getRelatedPosts } from "@/lib/data"

interface BlogDetailProps {
  post: BlogPost
}

export function BlogDetail({ post }: BlogDetailProps) {
  const relatedPosts = getRelatedPosts(post.slug, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-card/80 hover:text-card mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Badge className="bg-secondary text-secondary-foreground mb-4">{post.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6 text-balance">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-card/30">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-card">{post.author.name}</p>
                  <p className="text-sm text-card/70">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-card/80">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                        {paragraph.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((line) => line.startsWith("- "))
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split("\n").filter((line) => line.match(/^\d+\./))
                    return (
                      <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace(/^\d+\.\s*/, "")}
                          </li>
                        ))}
                      </ol>
                    )
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Share this article:</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24 space-y-8"
              >
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{post.author.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.author.role}</p>
                    <p className="text-sm text-muted-foreground">
                      Sharing insights and stories from the mountains of Pakistan and beyond.
                    </p>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">Ready to Explore?</h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Turn these stories into your own adventure
                    </p>
                    <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link href="/tours">Browse Tours</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
