import { useFormik } from "formik";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // inputlar için dizi kod tekrarı yapmamamk için
  const inputs = [
    { label: "Email", name: "email", type: "email" },
    { label: "age", name: "age", type: "number" },
    { label: "password", name: "password", type: "password" },
    { label: "confirm Password", name: "confirm_password", type: "password" },
  ];
  // formik özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değerleri
    initialValues: { email: "", age: "", password: "", confirm_password: "" },
    // formun gönderilme olayında çalışır
    onSubmit: async (values, actions) => {
      // api simülasyonu
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // kullanıcıyı locale gönder
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
      navigate("/home");
      // form temizleme
      actions.resetForm();
    },
    validationSchema: schema,
  });
  return (
    <>
      <div className="container " style={{ maxWidth: "900px" }}>
        <div className="logo">
          <img src="c-logo.png" alt="logo" />
          <h3>Coinbit</h3>
        </div>
        <form onSubmit={formik.handleSubmit} action="">
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Register{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
// input alanı bileşeni
const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
