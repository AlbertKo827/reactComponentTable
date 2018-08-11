import * as React from "react"

import "./table.css";

interface tableProp<T>{
    memberInfo : T[],
}

interface tableState{
    view : string
}

export interface memberModelProps{
    name : string,
    age : number,
    phoneNum : string
}

class Mytable extends React.Component<tableProp<memberModelProps>, tableState>{
    constructor(props : tableProp<memberModelProps>){
        super(props);

        this.state = {
            view : "안녕하세요!"
        };
    }

    public AddclickHandler(){
        this.setState({view : "잘지내봐요!"});
    }

    public render(){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan={3}>
                                스터디 멤버 정보
                            </th>
                        </tr>
                        <tr>
                            <th id="name">이름</th>
                            <th id="age">나이</th>
                            <th id="phone">전화번호</th>
                        </tr>
                        {
                            this.props.memberInfo.map(((member, index) => {
                                return(
                                    <TableRow 
                                        name={member.name} 
                                        age={member.age} 
                                        phoneNum={member.phoneNum}
                                    />
                                )
                            }))
                        }
                    </tbody>
                </table>
                <button onClick={event => this.AddclickHandler()}>Add</button>
                <h1>{this.state.view}</h1>
            </div>
        )
    }
}

const TableRow : React.SFC<memberModelProps> = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.phoneNum}</td>
        </tr>
    )
}

export default Mytable;