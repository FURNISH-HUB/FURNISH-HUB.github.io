const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FURNISH</h1>
          <p className="text-muted-foreground">Our story of craftsmanship and design</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At FURNISH, we believe that furniture should be more than just functional—it should 
              inspire and elevate your living spaces. Since our founding, we've been committed to 
              creating timeless pieces that blend exceptional craftsmanship with modern design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece in our collection is carefully curated to ensure it meets our high standards 
              of quality, sustainability, and aesthetic excellence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We work with skilled artisans who pour their expertise into every detail, 
                  ensuring furniture that lasts for generations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  Our commitment to the environment drives us to source sustainable materials 
                  and use eco-friendly production methods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Timeless Design</h3>
                <p className="text-muted-foreground">
                  We create pieces that transcend trends, offering designs that remain beautiful 
                  and relevant for years to come.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you choose FURNISH, you're not just buying furniture—you're investing in 
              quality, sustainability, and design excellence. We stand behind every piece we create, 
              and we're here to help you create the home of your dreams.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
