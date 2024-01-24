import ContactForm from "./components/ContactForm";
import ApplicationForm from "./components/ApplicationForm";

const App = () => {
  return (
    <>
      <ApplicationForm />
      <h1 className="bg-red-300 py-5 text-3xl underline">Hello world!</h1>
      <ContactForm />
    </>
  );
};

export default App;
