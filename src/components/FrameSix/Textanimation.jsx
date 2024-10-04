
import Skill from './Skill'

const Multiverse = () => {
    const skills = ['ML Engineer', 'C Developer', 'Data Scientist']
    return (




        <span className='inline-block ml-2 relative  '>
            {skills.map((skill, index) =>
                <Skill skill={skill} key={index} index={index} />
            )}

        </span>



    )
}





export default Multiverse