"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const ContactPage = () => {
  const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const [result, setResult] = useState("");
  const [isPending ,setIsPending]=useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9627a35f-d08b-4663-a4e6-d01e76524da8");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data=await response.json();
    if(data.success){
      setResult("Form Submitted Successfully")
      event.target.reset();
      setTimeout(() => {
        setResult("")
        setIsPending(false)
        
      }, 1000);
    }else{
      console.log("Error",data);
      setResult(data.message)
    }
  };

  return (
    <div
      className='full px-[12%] py-10 scroll-mt-10 bg-[url("/bgimage.png")] bg-no-repeat bg-center
    bg-[length:90%_auto]'
    >
      <h2 className="text-center text-5xl font-Ovo mt-20">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.{" "}
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-8">
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-lg placeholder:text-lg font-Ovo"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-lg placeholder:text-lg font-Ovo"
          />
        </div>
        <Textarea
          rows="4"
          placeholder="Enter your message..."
          name="message"
          required
          className=" p-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 text-lg placeholder:text-lg font-Ovo"
        />
<Button
          type="submit"
          className="py-6 px-9 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition duration-500 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit now"}
          <span className="text-white">{rightArrowIcon}</span>
        </Button>
        <p className="text-lg mt-5">{result}</p>
      </form>
    </div>
  );
};

export default ContactPage;
