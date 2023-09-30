"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfo from "@/components/StudentForm/StudentBasicInfo";
import StudentGuardianInfo from "@/components/StudentForm/StudentGuardianInfo";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import StudentLocalGuardian from "@/components/StudentForm/StudentLocalGuardian";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <StudentGuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentLocalGuardian />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create StudentPage</h2>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      ></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
