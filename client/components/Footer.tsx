import { Link } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "+918349180078";
  const email = "infocheckbeforego@gmail.com";
  const website = "https://www.checkbeforego.com";
  return (
    <footer className="border-t bg-background mt-8">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <a className="underline" href={`https://wa.me/${phoneNumber.replace("+", "")}`} target="_blank" rel="noreferrer">WhatsApp: +91 83491 80078</a>
            </li>
            <li>
              <a className="underline" href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a className="underline" href={website} target="_blank" rel="noreferrer">www.checkbeforego.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link className="underline" to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="text-muted-foreground">
          <p className="mb-2">Stay connected with us for updates & offers.</p>
          <p className="text-xs">Independent service. Not affiliated with any OEM or dealership.</p>
        </div>
      </div>
    </footer>
  );
}
