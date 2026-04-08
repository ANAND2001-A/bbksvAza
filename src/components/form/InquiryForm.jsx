import React from "react";
import { useAppContext } from "../context/AppContext";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import {
  countries,
  getStatesForCountry,
  getDistrictsForState,
} from "../data/locationData";
import { productCategories } from "../data/productsData";
import { CheckCircle, Loader } from "lucide-react";

const InquiryForm = () => {
  const {
    state,
    updateFormField,
    updateCountry,
    updateState,
    setFormErrors,
    setSubmitting,
    setSubmitSuccess,
    resetForm,
  } = useAppContext();

  const { formData, formErrors, isSubmitting, submitSuccess } = state;

  const businessTypes = [
    "Franchise Partner",
    "Distributor",
    "Dealer",
    "Retailer",
    "Bulk Purchase",
    "Institutional Buyer",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormField(name, value);
  };

  const handleCountryChange = (e) => {
    updateCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    updateState(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    const cleanedPhone = (formData.contactNumber || "").replace(/\D/g, "");
    const cleanedEmail = (formData.email || "").trim();
    const cleanedPincode = (formData.pincode || "").trim();
    const cleanedGST = (formData.gstNumber || "").trim();

    if (!formData.fullName?.trim()) {
      errors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = "Please enter a valid full name";
    }

    if (!cleanedPhone) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(cleanedPhone)) {
      errors.contactNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!cleanedEmail) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedEmail)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.country) errors.country = "Country is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.district) errors.district = "District / City is required";

    if (cleanedPincode && !/^\d{6}$/.test(cleanedPincode)) {
      errors.pincode = "Please enter a valid 6-digit pincode";
    }

    if (!formData.productInterest) {
      errors.productInterest = "Please select product interest";
    }

    if (!formData.businessType) {
      errors.businessType = "Please select business type";
    }

    if (!formData.gstAvailable) {
      errors.gstAvailable = "Please select GST availability";
    }

    if (formData.gstAvailable === "Yes") {
      if (!cleanedGST) {
        errors.gstNumber = "GST number is required";
      } else if (!/^[0-9A-Z]{15}$/.test(cleanedGST.toUpperCase())) {
        errors.gstNumber = "Invalid GST number";
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        resetForm();
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const availableStates = getStatesForCountry(formData.country);
  const availableDistricts = getDistrictsForState(
    formData.country,
    formData.state
  );

  // ✅ SUCCESS UI
  if (submitSuccess) {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-lg">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-slate-900">
          Application Submitted Successfully
        </h2>
        <p className="text-base text-slate-600">
          Thank you! Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="mx-auto max-w-5xl bg-green-50 p-4 rounded-3xl" onSubmit={handleSubmit}>
      <div className="rounded-3xl border border-green-100 bg-white p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition hover:shadow-lg">
        
        <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
          Franchise / Distributor Inquiry Form
        </h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <InputField {...{
            label: "Full Name",
            name: "fullName",
            value: formData.fullName,
            onChange: handleInputChange,
            error: formErrors.fullName,
            required: true,
            placeholder: "Enter your full name"
          }} />

          <InputField {...{
            label: "Contact Number",
            name: "contactNumber",
            type: "tel",
            value: formData.contactNumber,
            onChange: handleInputChange,
            error: formErrors.contactNumber,
            required: true,
            placeholder: "Enter mobile number"
          }} />

          <InputField {...{
            label: "Email",
            name: "email",
            type: "email",
            value: formData.email,
            onChange: handleInputChange,
            error: formErrors.email,
            required: true
          }} />

          <SelectField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            options={countries.map((c) => c.name)}
            error={formErrors.country}
            required
          />

          <SelectField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleStateChange}
            options={availableStates}
            error={formErrors.state}
            required
          />

          <SelectField
            label="District"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            options={availableDistricts}
            error={formErrors.district}
            required
          />

          <InputField
            label="Village / Locality"
            name="villageName"
            value={formData.villageName}
            onChange={handleInputChange}
          />

          <InputField
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            error={formErrors.pincode}
          />

          <SelectField
            label="Product Interest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleInputChange}
            options={productCategories}
            error={formErrors.productInterest}
            required
          />

          <SelectField
            label="Business Type"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            options={businessTypes}
            error={formErrors.businessType}
            required
          />

          <SelectField
            label="GST Available?"
            name="gstAvailable"
            value={formData.gstAvailable}
            onChange={handleInputChange}
            options={["Yes", "No"]}
            error={formErrors.gstAvailable}
            required
          />

          {formData.gstAvailable === "Yes" && (
            <InputField
              label="GST Number"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={(e) =>
                updateFormField("gstNumber", e.target.value.toUpperCase())
              }
              error={formErrors.gstNumber}
              required
            />
          )}
        </div>

        <div className="mt-5 text-black">
          <TextAreaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-green-500 px-5 py-3 font-semibold text-white 
            hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 shadow-md 
            disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          By submitting this form, you agree to our terms and policy.
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;