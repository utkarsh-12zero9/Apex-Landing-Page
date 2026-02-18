import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <NavBar />
            <main className="pt-24 mt-3 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-center text-primary">REFUND POLICY</h1>
                <h2 className="text-xl font-medium mb-8 text-center text-muted-foreground">Apex School of Business</h2>

                <div className="space-y-12">
                    {/* Refund Policy */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Refund Policy</h2>
                        <p>We are committed to delivering high-quality, execution-focused learning.</p>
                        <p>If you feel the program is not the right fit for you, you can request a refund within the refund window.</p>
                    </section>

                    {/* 7-Day Refund Window */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">7-Day Refund Window</h2>
                        <p>All enrollments come with a 7-day refund policy from the date of purchase.</p>
                        <p>You may request a refund within 7 days by contacting our support team via email or WhatsApp.</p>
                        <p>No detailed justification is required.</p>
                        <p>After 7 days from the date of enrollment, no refund requests will be accepted.</p>
                    </section>

                    {/* Placement Assistance Policy */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Placement Assistance Policy</h2>
                        <p>Placement assistance begins after the core learning period.</p>
                        <p>If you choose to opt into placement support and actively begin placement activities, refund requests will not be applicable beyond that stage.</p>
                    </section>

                    {/* GST and Transaction Charges */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">GST and Transaction Charges</h2>
                        <p>GST and payment gateway charges, if applicable, are non-refundable.</p>
                        <p>Refunds will be processed only on the base course fee.</p>
                    </section>

                    {/* Corporate Enrollments */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Corporate Enrollments</h2>
                        <p>Corporate training programs are non-refundable once onboarding and scheduling are confirmed.</p>
                    </section>

                    {/* Refund Processing Timeline */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Refund Processing Timeline</h2>
                        <p>Approved refunds will be processed within 48 hours.</p>
                        <p>The amount will be credited to the original payment method within 5 to 7 business days, depending on your bank or payment provider.</p>
                        <p>You can raise your refund request via our WhatsApp Support channel.</p>
                        <div className="bg-gray-200 border border-border rounded-xl p-6 mt-6">
                            <h3 className="text-lg font-bold text-foreground mb-2">Need Support?</h3>
                            <p className="text-muted-foreground mb-4">In case you need any support, please WhatsApp us.</p>
                            <a
                                href="https://wa.me/918049765241"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
