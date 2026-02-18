import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <NavBar />
            <main className="pt-24 mt-3 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-primary">TERMS OF USE</h1>

                <div className="space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">OVERVIEW</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>This website is operated by Apex. Throughout the site, the terms <strong>we</strong>, <strong>us</strong> and <strong>our</strong> refer to Apex.</p>
                            <p>Apex offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
                            <p>By visiting our site and/or enrolling in our program, you engage in our <strong>Service</strong> and agree to be bound by the following Terms of Use.</p>
                            <p>If you do not agree to these terms, you may not access the website or enroll in the program.</p>
                        </div>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 1 - ELIGIBILITY</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>By agreeing to these Terms, you confirm that:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>You are at least 18 years of age</li>
                                <li>You are legally capable of entering into a binding agreement</li>
                                <li>The information you provide is accurate and complete</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 2 - PROGRAM ACCESS</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Upon successful payment, you are granted limited, non-transferable access to the enrolled program.</p>
                            <p>You may not:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Share login credentials</li>
                                <li>Record live sessions</li>
                                <li>Reproduce or redistribute course materials</li>
                                <li>Resell any part of the content</li>
                                <li>Allow third-party access</li>
                            </ul>
                            <p className="font-medium text-foreground">Violation may result in termination of access without refund.</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 3 - INTELLECTUAL PROPERTY</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>All materials including:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Videos</li>
                                <li>Frameworks</li>
                                <li>Templates</li>
                                <li>Assignments</li>
                                <li>Automation workflows</li>
                                <li>Documents</li>
                                <li>Brand assets</li>
                            </ul>
                            <p>are the intellectual property of Apex.</p>
                            <p>You may use the materials for personal learning purposes only.</p>
                            <p className="font-medium text-foreground">Commercial use, redistribution or unauthorized reproduction is strictly prohibited.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 4 - LIVE SESSIONS & COMMUNITY CONDUCT</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Participants must maintain respectful and professional behavior.</p>
                            <p>We reserve the right to remove any participant who:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Engages in abusive behavior</li>
                                <li>Disrupts sessions</li>
                                <li>Harasses others</li>
                                <li>Shares unauthorized materials</li>
                            </ul>
                            <p className="font-medium text-foreground">Access may be revoked without refund in such cases.</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 5 - PLACEMENT ASSISTANCE DISCLAIMER</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Placement assistance includes:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Resume review</li>
                                <li>Portfolio guidance</li>
                                <li>Mock interviews</li>
                                <li>Application strategy support</li>
                            </ul>
                            <p>We do not guarantee employment, salary levels or job offers.</p>
                            <p>Hiring decisions are solely at the discretion of employers.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 6 - PAYMENTS & PRICING</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>All payments must be completed before program access is granted.</p>
                            <p>Prices may change without prior notice.</p>
                            <p>GST and applicable transaction charges are non-refundable.</p>
                            <p>Refunds, if applicable, are governed strictly by our Refund Policy, including the defined refund window and eligibility conditions.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 7 - MODIFICATIONS TO PROGRAM</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We reserve the right to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Update curriculum</li>
                                <li>Modify tools used</li>
                                <li>Change schedules</li>
                                <li>Improve content</li>
                            </ul>
                            <p>These updates are made to enhance learning quality.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 8 - THIRD-PARTY TOOLS AND SERVICES</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>The program may include access to or integration with third-party tools, software platforms and external services to support learning and practical implementation.</p>
                            <p>These tools are provided for educational and execution purposes only.</p>
                            <p>We do not control or operate these third-party platforms and are not responsible for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Service interruptions or downtime</li>
                                <li>Changes in platform policies or pricing</li>
                                <li>Data loss or technical errors</li>
                                <li>Performance, accuracy or availability of external services</li>
                            </ul>
                            <p>Any use of third-party tools is subject to the respective provider's terms and conditions.</p>
                            <p>Participants are responsible for reviewing and complying with the policies of such third-party platforms before using them.</p>
                            <p>We are not liable for any loss, damage or disputes arising from interactions, transactions or usage of any external tools or services.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 9 - ACCURACY OF INFORMATION</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We strive to provide accurate and updated information.</p>
                            <p>However, we do not guarantee that all information on the website is error-free, complete or current.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 10 - PROHIBITED USES</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>You may not use this website or program:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>For unlawful purposes</li>
                                <li>To violate intellectual property rights</li>
                                <li>To distribute malicious code</li>
                                <li>To collect data unlawfully</li>
                                <li>To engage in fraudulent activity</li>
                            </ul>
                            <p className="font-medium text-foreground">Violation may result in immediate termination.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 11 - LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Apex shall not be liable for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Career outcomes</li>
                                <li>Business results</li>
                                <li>Loss of income</li>
                                <li>Technical disruptions</li>
                                <li>Employer hiring decisions</li>
                            </ul>
                            <p>Your participation and results depend on your effort and application.</p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 12 - TERMINATION</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We reserve the right to terminate access if these Terms are violated.</p>
                            <p>Termination does not entitle the user to a refund.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 13 - GOVERNING LAW</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
                            <p>Any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.</p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 14 - CHANGES TO TERMS</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We reserve the right to update these Terms at any time.</p>
                            <p>Continued use of the website or program constitutes acceptance of updated terms.</p>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">SECTION 15 - CONTACT INFORMATION</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>For support or queries:</p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:support@salesacademy.com" className="text-primary hover:underline">support@salesacademy.com</a><br />
                                <strong>Phone:</strong> +91 8049765241<br />
                                <strong>Address:</strong> Rainmakers Workspace, J.P Nagar, 3rd Phase, Bangalore, Karnataka, India 560078
                            </p>
                        </div>
                    </section>

                    {/* Support CTA */}
                    <section className="mt-12 p-6 bg-muted/20 rounded-xl border border-border">
                        <h2 className="text-xl font-bold mb-2">Need Support?</h2>
                        <p className="text-muted-foreground mb-4">In case you need any support, please WhatsApp us.</p>
                        <a href="https://wa.me/918049765241" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
                            WhatsApp Us
                        </a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
