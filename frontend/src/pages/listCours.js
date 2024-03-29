import Cours from '../components/cours';
import Footer from '../components/footer';
import React, { PureComponent } from 'react'

class ListCours extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            table:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/cours')//http://127.0.0.1:8000/api/Courses
        .then(response=>response.json())
        .then((resultat)=>{
            this.setState({
                table:resultat
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col">
                            <h1>Cours</h1>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input className="form-control" id="searchInput" type="text" placeholder="Search.." />
                        </div>
                    </div>
                    <div className="row" id="lessonList">
                        {
                            this.state.table.map((tab)=>
                                <Cours key={tab.id} imageCours={tab.picture} idCours={tab.id} descriptifImage="css3" titreCours={tab.titre} descriptionCours={tab.description} />
                            )
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListCours;
