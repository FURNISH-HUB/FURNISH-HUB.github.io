const ShippingReturns = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping & Returns</h1>
          <p className="text-muted-foreground">Everything you need to know about delivery and returns</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Shipping Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Delivery Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Standard shipping takes 5-7 business days for most locations. Express shipping 
                  options are available at checkout for 2-3 day delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Shipping Costs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free standard shipping on orders over $500</li>
                  <li>• Standard shipping: $49 (5-7 business days)</li>
                  <li>• Express shipping: $99 (2-3 business days)</li>
                  <li>• White glove delivery available for select items</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tracking Your Order</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Once your order ships, you'll receive a tracking number via email. You can track 
                  your shipment in real-time through our website or the carrier's tracking portal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Returns Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">30-Day Return Window</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 30-day return policy on most items. If you're not completely satisfied 
                  with your purchase, you can return it for a full refund within 30 days of delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Return Conditions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To be eligible for a return, items must be:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• In original, unused condition</li>
                  <li>• In original packaging with all tags attached</li>
                  <li>• Accompanied by proof of purchase</li>
                  <li>• Free from damage, stains, or odors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Return Process</h3>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Contact our customer service team to initiate a return</li>
                  <li>Receive a return authorization number and shipping label</li>
                  <li>Pack the item securely in original packaging</li>
                  <li>Ship the item using the provided label</li>
                  <li>Receive your refund within 5-7 business days of our receipt</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Non-Returnable Items</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom or made-to-order furniture</li>
                  <li>• Clearance or sale items marked "Final Sale"</li>
                  <li>• Items damaged due to misuse or negligence</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Exchange Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you'd like to exchange an item for a different size, color, or style, please 
              contact our customer service team. We'll be happy to help you find the perfect piece 
              for your space.
            </p>
          </section>

          <section className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
            <p className="text-muted-foreground">
              If you have any questions about shipping or returns, please contact our customer 
              service team at <a href="mailto:support@furnish.com" className="text-accent hover:underline">support@furnish.com</a> or 
              call us at <span className="font-medium">+1 (555) 123-4567</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
