import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { MessageCircle, Mail } from 'lucide-react';

export default function Support() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <NavBar />
            <main className="pt-24 mt-3 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-primary">Support Section</h1>

                <div className="space-y-12">
                    {/* Need Help? */}
                    <section className="text-center space-y-6">
                        <h2 className="text-3xl font-bold">Need Help?</h2>

                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Faster Assistance</h3>
                                <p className="text-muted-foreground mb-4">Chat with us on WhatsApp for quick responses.</p>
                                <a href="https://wa.me/918049765241" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium w-full mt-auto">
                                    Chat on WhatsApp
                                </a>
                            </div>

                            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Formal Queries</h3>
                                <p className="text-muted-foreground mb-4">Email us for official communication.</p>
                                <a href="mailto:support@apexschoolofbusiness.com" className="inline-flex items-center justify-center px-4 py-2 bg-primary  rounded-lg hover:bg-primary/90 transition-colors font-medium w-full mt-auto">
                                    Email Support
                                </a>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-4">For formal queries, write to: <strong>support@apexschoolofbusiness.com</strong></p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        {/* For Students */}
                        <section className="space-y-4 flex flex-col h-full">
                            <h2 className="text-2xl font-bold text-primary border-b pb-2">For Students</h2>
                            <h3 className="text-xl font-semibold">Use WhatsApp as Primary Support</h3>

                            <div className="bg-muted/30 p-6 rounded-lg flex-1">
                                <h4 className="font-semibold mb-3">Why?</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Faster response builds trust</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Students prefer chat over email</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Higher conversion from inquiry to enrollment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>Easy follow-up for placements</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* For Corporate / Legal */}
                        <section className="space-y-4 flex flex-col h-full">
                            <h2 className="text-2xl font-bold text-primary border-b pb-2">For Corporate / Legal / Formal Queries</h2>
                            <h3 className="text-xl font-semibold">Keep Email as the Official Channel</h3>

                            <div className="bg-muted/30 p-6 rounded-lg flex-1">
                                <h4 className="font-semibold mb-3">Why?</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Looks professional</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Needed for invoices and documentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Better for long conversations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>Required for legal notices</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
