import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <NavBar />
            <main className="pt-24 mt-3 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-2 text-center text-primary">PRIVACY POLICY</h1>
                <h2 className="text-xl font-medium mb-8 text-center text-muted-foreground">Apex School of Business</h2>

                <div className="space-y-12">
                    {/* Intro */}
                    <section className="space-y-4 text-muted-foreground/90 leading-relaxed">
                        <p>This Privacy Policy governs the manner in which Apex, referred to as <strong>we</strong>, <strong>our</strong>, or <strong>us</strong>, collects, uses, maintains, and discloses information of users accessing our website, programs, and services (<strong>Platform</strong>).</p>
                        <p>This Policy explains what information we collect, how we use it, your rights, and how we protect your data.</p>
                        <p>By accessing or using our Platform, providing your Personal Information, or otherwise agreeing when prompted, you consent to the collection and use of information in accordance with this Privacy Policy and our Terms of Use. If you do not agree, please discontinue use of the Platform immediately.</p>
                        <p>Capitalized terms not defined here shall have the meaning assigned in our Terms of Use.</p>
                    </section>

                    {/* Personal Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">PERSONAL & SENSITIVE INFORMATION</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p><strong>Personal Information</strong> means information that identifies you directly or indirectly, including but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Billing information</li>
                                <li>Account login details</li>
                                <li>IP address</li>
                                <li>Profile details</li>
                            </ul>
                            <p><strong>Sensitive Information</strong> includes:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Passwords</li>
                                <li>Financial information</li>
                                <li>Government identification numbers</li>
                                <li>Any data categorized as sensitive under applicable data protection laws</li>
                            </ul>
                            <p>Wherever the term Personal Information is used in this Policy, it includes Sensitive Personal Information where applicable.</p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">INFORMATION WE COLLECT</h2>
                        <div className="space-y-6 text-muted-foreground/90 leading-relaxed">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">1. Personal Information</h3>
                                <p>We collect Personal Information when you:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Register for our programs</li>
                                    <li>Purchase any course or service</li>
                                    <li>Fill out forms</li>
                                    <li>Contact support</li>
                                    <li>Participate in live sessions</li>
                                    <li>Subscribe to communications</li>
                                </ul>
                                <p className="mt-2">You may choose not to provide certain information. However, doing so may limit access to some features of the Platform.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">2. Non-Personal Information</h3>
                                <p>When you interact with our Platform, we may automatically collect:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Browser type</li>
                                    <li>Device type</li>
                                    <li>Operating system</li>
                                    <li>IP address</li>
                                    <li>Pages visited</li>
                                    <li>Date and time of access</li>
                                    <li>Referral source</li>
                                </ul>
                                <p className="mt-2">This information helps us improve performance and user experience.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">3. Cookies</h3>
                                <p>We may use cookies and similar technologies to enhance user experience and analyze traffic. You may disable cookies through your browser settings, but certain features of the Platform may not function properly.</p>
                            </div>
                        </div>
                    </section>

                    {/* How We Use */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">HOW WE USE AND SHARE THE INFORMATION COLLECTED</h2>
                        <div className="space-y-6 text-muted-foreground/90 leading-relaxed">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">1. To Provide Access to the Platform</h3>
                                <p>We use your information to:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Create and manage your account</li>
                                    <li>Provide access to courses and services</li>
                                    <li>Process payments</li>
                                    <li>Provide customer support</li>
                                    <li>Resolve technical issues</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">2. To Improve the Platform</h3>
                                <p>We analyze usage data to:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Improve course quality</li>
                                    <li>Enhance user experience</li>
                                    <li>Prevent fraud and misuse</li>
                                    <li>Maintain platform security</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">3. To Communicate With You</h3>
                                <p>We may use your email or phone number to:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Send important updates</li>
                                    <li>Share program related information</li>
                                    <li>Respond to your queries</li>
                                    <li>Send marketing communication, if you opt in</li>
                                </ul>
                                <p className="mt-2">You may unsubscribe from promotional communication at any time.</p>
                            </div>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">INFORMATION SHARING</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We do not sell your Personal Information.</p>
                            <p>We may share your information only with:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Payment processors</li>
                                <li>Hosting and cloud service providers</li>
                                <li>Analytics providers</li>
                                <li>Legal authorities, when required by law</li>
                            </ul>
                            <p>Information is shared only to the extent necessary to operate our services.</p>
                        </div>
                    </section>

                    {/* Your Choices */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">YOUR CHOICES</h2>
                        <div className="space-y-6 text-muted-foreground/90 leading-relaxed">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">1. Limit Information Provided</h3>
                                <p>You may choose what information to provide. However, some information is required to access our services.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">2. Limit Communications</h3>
                                <p>You may opt out of promotional emails. However, essential service related communications cannot be opted out.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">3. Disable Cookies</h3>
                                <p>You may disable cookies through your browser settings.</p>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">YOUR RIGHTS</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Access your Personal Information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion</li>
                                <li>Restrict processing</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent</li>
                            </ul>
                            <p>To exercise these rights, contact us at the email provided below.</p>
                            <p>We may verify your identity before processing any request.</p>
                        </div>
                    </section>

                    {/* Protection */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">PROTECTION OF YOUR INFORMATION</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We implement reasonable technical and organizational measures to protect your Personal Information from unauthorized access, misuse, alteration, or disclosure.</p>
                            <p>However, no digital system can guarantee complete security.</p>
                        </div>
                    </section>

                    {/* Third Party */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">THIRD PARTY WEBSITES</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Our Platform may contain references to third party services required for course delivery, analytics, communication, or payment processing.</p>
                            <p>We are not responsible for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Service interruptions</li>
                                <li>Policy changes</li>
                                <li>Security practices of third parties</li>
                            </ul>
                            <p>Use of such services is subject to their respective terms and privacy policies.</p>
                        </div>
                    </section>

                    {/* Cross Border */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">CROSS BORDER DATA TRANSFER</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>Your information may be stored and processed in India or other countries where our service providers operate.</p>
                            <p>By using our Platform, you consent to such transfer and processing.</p>
                        </div>
                    </section>

                    {/* Duration */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">DURATION OF DATA STORAGE</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We retain your Personal Information only as long as necessary:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To provide services</li>
                                <li>To comply with legal obligations</li>
                                <li>To resolve disputes</li>
                                <li>To enforce agreements</li>
                            </ul>
                            <p>When no longer required, data is securely deleted or anonymized.</p>
                        </div>
                    </section>

                    {/* Modification */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">MODIFICATION TO PRIVACY POLICY</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>We may revise this Privacy Policy from time to time. Updated versions will be posted on this page with the revised effective date.</p>
                            <p>Continued use of the Platform constitutes acceptance of the updated Policy.</p>
                        </div>
                    </section>

                    {/* Grievances */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">GRIEVANCES</h2>
                        <div className="space-y-4 text-muted-foreground/90 leading-relaxed">
                            <p>If you have any questions, concerns, or wish to exercise your rights, please contact:</p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:support@yourapexdomain.com" className="text-primary hover:underline">support@yourapexdomain.com</a>
                            </p>
                            <p>We will respond within a reasonable timeframe in accordance with applicable law.</p>
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
