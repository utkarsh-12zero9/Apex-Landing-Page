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
                </div>
            </main>
            <Footer />
        </div>
    );
}
