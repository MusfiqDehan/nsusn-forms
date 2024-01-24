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
  const [hasMVP, setHasMVP] = useState();
  const [pitchDeckFile, setPitchDeckFile] = useState("");
  const [productDemoLink, setProductDemoLink] = useState("");
  const [expectedSupport, setExpectedSupport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the server
    fetch("http://localhost:3000/contact", {
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Contact No:
        <input
          type="text"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required
        />
      </label>
      <label>
        LinkedIn Link:
        <input
          type="text"
          value={linkedinLink}
          onChange={(e) => setLinkedinLink(e.target.value)}
          required
        />
      </label>
      <label>
        Idea Name:
        <input
          type="text"
          value={ideaName}
          onChange={(e) => setIdeaName(e.target.value)}
          required
        />
      </label>
      <label>
        Startup Site Link:
        <input
          type="text"
          value={startupSiteLink}
          onChange={(e) => setStartupSiteLink(e.target.value)}
          required
        />
      </label>
      <label>
        FB Page Link:
        <input
          type="text"
          value={fbPageLink}
          onChange={(e) => setFBPageLink(e.target.value)}
          required
        />
      </label>
      <label>
        Stream Category:
        <input
          type="text"
          value={streamCategory}
          onChange={(e) => setStreamCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Domain Type:
        <input
          type="text"
          value={domainType}
          onChange={(e) => setDomainType(e.target.value)}
          required
        />
      </label>
      <label>
        Problem:
        <input
          type="text"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />
      </label>
      <label>
        Solution:
        <input
          type="text"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          required
        />
      </label>
      <label>
        Cofounder Details:
        <input
          type="text"
          value={cofounderDetails}
          onChange={(e) => setCofounderDetails(e.target.value)}
          required
        />
      </label>
      <label>
        Has MVP:
        <input
          type="text"
          value={hasMVP}
          onChange={(e) => setHasMVP(e.target.value)}
          required
        />
      </label>
      <label>
        Pitch Deck File:
        <input
          type="text"
          value={pitchDeckFile}
          onChange={(e) => setPitchDeckFile(e.target.value)}
          required
        />
      </label>
      <label>
        Product Demo Link:
        <input
          type="text"
          value={productDemoLink}
          onChange={(e) => setProductDemoLink(e.target.value)}
          required
        />
      </label>
      <label>
        Expected Support:
        <input
          type="text"
          value={expectedSupport}
          onChange={(e) => setExpectedSupport(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ApplicationForm;
