import { useState } from "react";

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [ideaName, setIdeaName] = useState("");
  const [startupSiteLink, setStartupSiteLink] = useState("");
  const [fbPageLink, setFBPageLink] = useState("");
  const [streamCategory, setStreamCategory] = useState("");
  const [domainType, setDomainType] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [cofounderDetails, setCofounderDetails] = useState("");
  const [hasMVP, setHasMVP] = useState("");
  const [pitchDeckFile, setPitchDeckFile] = useState("");
  const [productDemoLink, setProductDemoLink] = useState("");
  const [expectedSupport, setExpectedSupport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the server
    fetch("http://localhost:3000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        contactNo,
        linkedinLink,
        ideaName,
        startupSiteLink,
        fbPageLink,
        streamCategory,
        domainType,
        problem,
        solution,
        cofounderDetails,
        hasMVP,
        pitchDeckFile,
        productDemoLink,
        expectedSupport,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label className="block p-5">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Contact No:
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          LinkedIn Link:
          <input
            type="text"
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Idea Name:
          <input
            type="text"
            value={ideaName}
            onChange={(e) => setIdeaName(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Startup Site Link:
          <input
            type="text"
            value={startupSiteLink}
            onChange={(e) => setStartupSiteLink(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          FB Page Link:
          <input
            type="text"
            value={fbPageLink}
            onChange={(e) => setFBPageLink(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Stream Category:
          <div>
            <label className="block p-5">
              <input
                type="radio"
                value="Impact"
                checked={streamCategory === "Impact"}
                onChange={(e) => setStreamCategory(e.target.value)}
              />
              Impact
            </label>
            <label className="block p-5">
              <input
                type="radio"
                value="Women-led"
                checked={streamCategory === "Women-led"}
                onChange={(e) => setStreamCategory(e.target.value)}
              />
              Women-led
            </label>
            <label className="block p-5">
              <input
                type="radio"
                value="Grassroots"
                checked={streamCategory === "Grassroots"}
                onChange={(e) => setStreamCategory(e.target.value)}
              />
              Grassroots
            </label>
          </div>
        </label>
        <label className="block p-5">
          Domain Type:
          <input
            type="text"
            value={domainType}
            onChange={(e) => setDomainType(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Problem:
          <input
            type="text"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Solution:
          <input
            type="text"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Cofounder Details:
          <input
            type="text"
            value={cofounderDetails}
            onChange={(e) => setCofounderDetails(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Has MVP:
          <div>
            <label className="block p-5">
              <input
                type="radio"
                value="Yes"
                checked={hasMVP === "Yes"}
                onChange={(e) => setHasMVP(e.target.value)}
                required
              />
              Yes
            </label>
            <label className="block p-5">
              <input
                type="radio"
                value="No"
                checked={hasMVP === "No"}
                onChange={(e) => setHasMVP(e.target.value)}
                required
              />
              No
            </label>
          </div>
        </label>
        <label className="block p-5">
          Pitch Deck File Link:
          <input
            type="text"
            onChange={(e) => setPitchDeckFile(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Product Demo Link:
          <input
            type="text"
            value={productDemoLink}
            onChange={(e) => setProductDemoLink(e.target.value)}
            required
          />
        </label>
        <label className="block p-5">
          Expected Support:
          <input
            type="text"
            value={expectedSupport}
            onChange={(e) => setExpectedSupport(e.target.value)}
            required
          />
        </label>
        <input
          className="m-3 rounded-md bg-red-400 p-3"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default ApplicationForm;
