import ContactForm from "../components/Contact/ContactForm";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Contact(props) {
  return (
    <div style={{ backgroundColor: "rgb(0, 0, 36)" }}>
      <Header setShowItems={props.setShowItems} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
