import * as React from "react"

import "./table.css";

interface tableProp<T>{
    memberInfo : T[],
}

export interface memberModelProps{
    name : string,
    age : number,
    phoneNum : string
}

class Mytable extends React.Component<tableProp<memberModelProps>, {}>{
    public render(){
        return (
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