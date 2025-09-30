import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Parts() {
  const googleFormUrl = "https://forms.google.com/create"; // same as on Home SparePartsSection

  const openForm = () => {
    window.open(googleFormUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Spare Parts</CardTitle>
              <CardDescription>Submit your requirements via our Google Form</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Use the form to share vehicle details and the parts you need. Our team will get back within 24 hours with availability and pricing.
              </p>
              <div className="pt-2">
                <Button onClick={openForm} size="lg" className="inline-flex">
                  <Wrench className="mr-2 h-4 w-4" /> Open Spare Parts Request Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
