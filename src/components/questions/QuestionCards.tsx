import EachQuestionCard from "./EachQuestionCard"

const QuestionCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-stretch w-full justify-center max-w-[1200px] mx-auto py-8 md:py-16 lg:py-24 px-6 ">
            <EachQuestionCard
                Heading="No Experience"
                Content="It feels like every job I’m interested in requires experience,
            but as a student, it’s frustrating because I need a job to get
            experience, but I need experience to get a job."
            />
            <EachQuestionCard
                Heading="Competitive Job Market"
                Content="The job market is incredibly competitive. For every position I apply for, there are hundreds, sometimes thousands, of  other 
candidates who are just as qualified, if not more. Standing out
 in such a crowded field is tough."
            />
            <EachQuestionCard
                Heading="Skills Gap"
                Content="I did a lot of courses, but sometimes it feels like the skills I 
have aren’t exactly what employers are looking for. There’s 
often a gap between what I know and what the job 
descriptions require."
            />
            <EachQuestionCard
                Heading="Economic Factors"
                Content="The economy plays a big role in job availability. During 
economic downturns, there are fewer job openings, and it 
feels like I have to compete even harder for the limited 
positions available."
            />
            <EachQuestionCard
                Heading="Limited Access to Resources"
                Content="Not all students have equal access to career resources. I try 
to make use of my university’s career services, but sometimes 
it feels like I’m not getting the personalized help I need to 
really improve my applications and interviews."
            />
            <EachQuestionCard
                Heading="High Expectations"
                Content="I used to have high expectations believing that I will land my
dream job or a prestigious job straight out of college. But the
reality is for some it does happen but for most it does not 
because of lack of experience, and connections.  "
            />
        </div>
    )
}

export default QuestionCards
