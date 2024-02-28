import Footer from "@/components/Footer";

export default function software() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-white text-left px-4">
      <div className="max-w-xl mx-auto">
        <img src="/cloud.png" className="h-auto object-contain rounded-xl" alt="Cloud Services" />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="my-4 text-xl">
          Crafting Digital Solutions Tailored for Your Success
        </h1>
        <article className="text-sm md:text-base space-y-4">
          <p>
            In a world where technology is constantly evolving, having the right digital tools can make
            all the difference. That's why I'm dedicated to bringing your ideas to life through custom
            software and web development.
          </p>
          <h3 className="text-xl">What I Do:</h3>
          <p>
            At Encrypt, I specialize in creating bespoke software and websites. Whether you're a startup
            looking to launch your first app, a business in need of a unique software solution, or you
            want to upgrade your existing website, I'm here to help.
          </p>
          <h3 className="text-xl">My Approach:</h3>
          <p>
            <strong>Personalized Service:</strong> Your vision is unique, and so should be your digital solution. I
            work closely with you to understand your needs and bring your ideas to life.
          </p>
          <p>
            <strong>Clear Communication:</strong> No tech-speak or confusing jargon. I believe in keeping things simple
            and ensuring you're always in the loop.
          </p>
          <p>
            <strong>Continuous Support:</strong> My job isn't done at launch. I provide ongoing support and
            updates to keep your software or website running smoothly.
          </p>
          <h3 className="text-xl">Services Offered:</h3>
          <p>
            <strong>Custom Software Development:</strong> From desktop applications to mobile apps, I build software
            that meets your specific needs.
          </p>
          <p>
            <strong>Web Development & Design:</strong> Creating beautiful, responsive, and functional websites that
            engage your audience.
          </p>
          <p>
            <strong>E-commerce Solutions:</strong> Helping you sell your products or services online with a seamless
            shopping experience.
          </p>
          <p>
            <strong>Maintenance & Upgrades:</strong> Ensuring your digital assets stay up-to-date and secure.
          </p>
          <h3 className="text-xl">Why Choose Encrypt?</h3>
          <p>
            As a one-person team, I offer a level of dedication and personalization that big development
            firms can't match. Your project is not just another job for me; it's a passion project
            fueled by a desire to see you succeed.
          </p>
          <h3 className="text-xl">Get in Touch</h3>
          <p>
            Ready to turn your idea into a digital reality? Contact me for a free consultation, and
            let's discuss how we can create something amazing together.
          </p>
        </article>

      </div>
      </div>
      <Footer />
    </main>
  )
    ;
}
