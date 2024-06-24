import QuestionCards from "@/components/Questions/QuestionCards";
import QuestionHeader from "@/components/Questions/QuestionHeader";

const CommonQuestionsPage = () => {
  return (
    <>
      <div className="mt-28">
        <QuestionHeader />
        <QuestionCards />
      </div>
    </>
  );
};

export default CommonQuestionsPage;
