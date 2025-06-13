"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, FileText, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Support & Help</h1>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Email Support</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Get in touch with our support team for technical issues or
              questions.
            </p>
            <Button className="w-full" asChild>
              <a href="mailto:support@ciframanager.com">Contact Support</a>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Live Chat</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Chat with our support team in real-time for immediate assistance.
            </p>
            <Button className="w-full" variant="outline">
              Start Chat
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Documentation</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Browse our comprehensive guides and tutorials.
            </p>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/docs">View Docs</Link>
            </Button>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">
                How do I navigate between songs?
              </h3>
              <p className="text-sm text-muted-foreground">
                Use the floating menu at the bottom of song pages. Click
                "Previous" or "Next" to navigate between songs. You can also
                enable auto-advance in settings to automatically move to the
                next song after a set time.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                How do I enable auto-advance?
              </h3>
              <p className="text-sm text-muted-foreground">
                On any song page, click the "Settings" tab in the floating menu,
                then toggle "Auto-advance" to ON. You can adjust the timer
                duration from 5 seconds to 5 minutes.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Can I search for specific songs or artists?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes! Use the search functionality available on the home page or
                use the floating search feature to quickly find songs and
                artists.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                How do I access different features?
              </h3>
              <p className="text-sm text-muted-foreground">
                The floating menu provides quick access to navigation, settings,
                and support. Different features are available depending on
                whether you're on an artist page or a specific song page.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature Demos */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">
            Feature Demos & Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="outline"
              asChild
              className="h-auto p-4 justify-start"
            >
              <Link href="/test">
                <div>
                  <div className="font-medium">Test Page</div>
                  <div className="text-sm text-muted-foreground">
                    Try out various features and components
                  </div>
                </div>
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="h-auto p-4 justify-start"
            >
              <Link href="/test-floating-menu">
                <div>
                  <div className="font-medium">Floating Menu Demo</div>
                  <div className="text-sm text-muted-foreground">
                    See how the floating menu works
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </Card>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
