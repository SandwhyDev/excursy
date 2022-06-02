import { useState } from "react";

const Form = () => {
  const [preview, setPreview] = useState("");

  const handleImage = (e) => {
    let image = e.target.files[0];

    //file reader
    let fr = new FileReader();
    fr.onload = (x) => {
      setPreview(x.target.result);
    };

    fr.readAsDataURL(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let avatar = e.target.avatar.files[0];

    console.log(email, avatar);
  };
  return (
    <div className="p-10 ">
      <img
        src={preview}
        alt="image preview"
        className="bg-red-500 w-[200px] h-[200px] object-cover"
      />
      <form className="flex flex-col w-52 h-52 gap-4" onSubmit={handleSubmit}>
        <label htmlFor="avatar">avatar</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          multiple={false}
          accept="image/*"
          onChange={handleImage}
        />

        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" />

        <button type="submit" className="p-2 bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
