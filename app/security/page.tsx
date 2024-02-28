import Footer from "@/components/Footer";

export default function security() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-white text-left px-4">
        <div className="max-w-xl mx-auto">
          <img
            src="/cloud.png"
            className="h-auto object-contain rounded-xl"
            alt="Cloud Services"
          />
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="my-4 text-xl">
            Keeping You Safe in the Digital World
          </h1>
          <article className="text-sm md:text-base space-y-4">
            <p>
              In this digital age, where our lives intertwine with the internet,
              cybersecurity is not just a fancy term; it's a necessity. That's
              where I come in.
            </p>
            <h3 className="text-xl">What I Do:</h3>
            <p>
              I provide personalized cybersecurity services. Think of me as your
              digital guardian, ensuring your online safety while you focus on
              what you do best. Whether you're a small business owner, a
              freelancer, or just someone who values their online privacy, I'm
              here to help.
            </p>
            <h3 className="text-xl">My Approach:</h3>
            <p>
              <b>Simple and Straightforward:</b> No jargon, no complicated
              processes. I believe in making cybersecurity accessible to
              everyone.
            </p>
            <p>
              <b>Customized Solutions:</b> Your needs are unique. I offer
              tailored services that fit your specific situation.
            </p>
            <p>
              <b>Friendly and Approachable:</b> Have questions? Need advice? I'm
              just an email or phone call away.
            </p>
            <h3 className="text-xl">Services Offered:</h3>
            <p>
              <b>Website Security:</b> Protecting your website from unwanted
              intrusions.
            </p>
            <p>
              <b>Data Protection:</b> Ensuring your sensitive information stays
              private and secure. that engage your audience.
            </p>
            <p>
              <b>Safe Online Practices Education:</b> Teaching you and your team
              how to stay safe online. Emergency Response: Quick help if you
              suspect a security breach.
            </p>
            <p>
              <b>Emergency Response:</b> Quick help if you suspect a security
              breach.
            </p>
            <h3 className="text-xl">Why Choose Encrypt?</h3>
            <p>
              As a one-person operation, I provide a level of personal attention
              larger companies can't match. Your security is my top priority,
              and I'm dedicated to providing the best service possible.
            </p>
            <h3 className="text-xl">Get in Touch</h3>
            <p>
              Ready to secure your digital presence? Contact me today for a free
              consultation. Let's make your online world a safer place together.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
