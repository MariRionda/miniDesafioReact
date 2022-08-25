import React from "react";

const Table = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Hobbie</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pedro</td>
                    <td>20</td>
                    <td>ingeniería</td>
                    <td>fútbol</td>
                </tr>
                <tr>
                    <td>Rodrigo</td>
                    <td>22</td>
                    <td>arquitectura</td>
                    <td>bajo eléctrico</td>
                </tr>
                <tr>
                    <td>Romina</td>
                    <td>21</td>
                    <td>abogacía</td>
                    <td>acrobacia</td>
                </tr>
                <tr>
                    <td>Ana</td>
                    <td>23</td>
                    <td>contadora</td>
                    <td>astronomía</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;