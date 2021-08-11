import { useParams, Link } from 'react-router-dom'

const Survey = () => {

    const  { questionNumber } = useParams()

    return (
        <div>
            <h1> Questionnaire </h1>
            <h2> Question : {questionNumber} </h2>
            <div>
                {
                    questionNumber > 1 &&
                        (<Link to={`/survey/${parseInt(questionNumber) - 1}`} style={{marginRight:'10px'}}>
                            Précédant
                        </Link>)
                }
                {
                    questionNumber >= 10 ?
                        <Link to='/results'>
                            Résultat
                        </Link>
                    :   <Link to={`/survey/${parseInt(questionNumber) + 1}`}>
                            Suivant
                        </Link>
                }                    
            </div>
        </div>
    )
}

export default Survey
