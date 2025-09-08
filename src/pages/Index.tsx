import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap, Users, Star, Mail, Phone, MapPin } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
import heroBg from "@/assets/hero1.jpg";
// import heroBg from "@/assets/hero2.jpg";
// import heroBg from "@/assets/hero3.jpg";
// import heroBg from "@/assets/hero4.jpg";
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'
import img3 from '@/assets/3.png'
import img4 from '@/assets/4.png'
import img5 from '@/assets/5.png'
import imgB1 from '@/assets/B1.jpeg'
import imgB2 from '@/assets/B2.jpeg'
import imgB3 from '@/assets/B3.jpg'
import imgB4 from '@/assets/B4.png'
import imgB5 from '@/assets/B5.png'
import imgB6 from '@/assets/B6.png'
import imgB7 from '@/assets/B7.jpg'
import imgB8 from '@/assets/B8.jpg'

const Index = () => {

  const webProjectsArr = [
    {
      category: 'Web Application',
      desc: 'Full stack with React & Node.js',
      img: img1
    },
    {
      category: 'Web Application',
      desc: 'Full stack with React & Node.js',
      img: img2
    },
    {
      category: 'Web Application',
      desc: 'Full stack with React & Node.js',
      img: img3
    },
    {
      category: 'Web Application',
      desc: 'Full stack with React & Node.js',
      img: img4
    },
    {
      category: 'Web Application',
      desc: 'Full stack with React & Node.js',
      img: img5
    },

  ]
  const brandProjectsArr = [
    {
      category: 'Brand Identity',
      desc: 'Complete brand redesign and logo creation',
      img: imgB1
    },
    {
      category: 'Brand Identity',
      desc: 'Complete brand redesign and logo creation',
      img: imgB2
    },
    {
      category: 'Brand Identity',
      desc: 'Complete brand redesign and logo creation',
      img: imgB7
    },
    {
      category: 'Brand Identity',
      desc: 'Complete brand redesign and logo creation',
      img: imgB4
    },
    {
      category: 'Brand Identity',
      desc: 'Complete brand redesign and logo creation',
      img: imgB5
    },

  ]


  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold hero-text">DevCraft</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <Button
              onClick={() => {
                const a = document.createElement('a');
                a.href = 'https://api.whatsapp.com/send?phone=447756589961';
                a.target = '_blank';
                a.click();

              }}
              variant="hero" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in animate">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="hero-text">Crafting Digital</span>
              <br />
              <span className="text-foreground">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full stack web development and stunning graphic design services that bring your vision to life with precision and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = 'https://api.whatsapp.com/send?phone=447756589961';
                  a.target = '_blank';
                  a.click();
                }}
                variant="hero" size="xl" className="glow-button">
                Start Your Project
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '#portfolio';
                  a.click();
                }}
                variant="glass" size="xl">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in two core areas that drive modern business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Full Stack Development</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  Custom Web Applications
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  E-commerce Platforms
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  API Development & Integration
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  Database Design & Optimization
                </li>
              </ul>
            </Card>

            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-accent to-primary mr-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Graphic Design</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Creative visual solutions that communicate your brand message and captivate your audience.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  Brand Identity & Logo Design
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  Marketing Materials
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-accent mr-2" />
                  Digital Illustrations
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose DevCraft?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We bridge the gap between technology and creativity, delivering solutions that are both functionally robust and visually stunning.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="p-4 rounded-full bg-gradient-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                <p className="text-muted-foreground">
                  Your success is our priority. We work closely with you to understand your vision and exceed expectations.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-accent to-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Efficient workflows and modern tools ensure we deliver high-quality results on time, every time.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 rounded-full bg-gradient-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in both code quality and design excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse of our recent projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webProjectsArr?.map((item, index) => (
              <Card key={index} className="glass-card overflow-hidden hover-lift group cursor-pointer">
                <div className="aspect-video bg-gradient-card flex items-center justify-center">
                  <img src={item?.img} />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    {item?.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item?.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              View More Projects
              <ArrowRight className="ml-2" />
            </Button>
          </div> */}
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />



          <div className="grid md:grid-cols-3 gap-8">
            {brandProjectsArr?.map((item, index) => (
              <Card key={index} className="glass-card overflow-hidden hover-lift group cursor-pointer">
                <div className="aspect-video bg-gradient-card flex items-center justify-center">
                  <img src={item?.img} />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    {item?.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item?.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          {/* <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              View More Projects
              <ArrowRight className="ml-2" />
            </Button>
          </div> */}
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
              <p className="text-xl text-muted-foreground">
                Ready to bring your vision to life? Get in touch and let's discuss your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">devcraft123@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+44 7756 589961</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Available Worldwide</p>
                    </div>
                  </div> */}
                </div>
              </div>

              <Card className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6">Start Your Project</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                      <option>Web Development</option>
                      <option>Graphic Design</option>
                      <option>Both Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary/50 border-t">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold hero-text mb-4">DevCraft</div>
            <p className="text-muted-foreground mb-6">
              Crafting digital experiences with precision and creativity
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              © DevCraft All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;