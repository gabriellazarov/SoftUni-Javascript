import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../api/data.js';

const homeTemplate = () => html`
<div id="exercise">
    <!-- <h1>Furniture List</h1>
    <textarea rows="5" cols="50"></textarea>
    <button>Generate</button> -->

    <div class="wrapper">
        <div class="card-wrapper">
            <div class="row">
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Decoration factor</th>
                                <th>Mark</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- <textarea rows="4" cols="50" disabled></textarea>
    <button>Buy</button> -->
</div>`;


const productTempalte = () => html`
<tr>
    <td>
        <img src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
    </td>
    <td>
        <p>Office chair</p>
    </td>
    <td>
        <p>160</p>
    </td>
    <td>
        <p>0.5</p>
    </td>
    <td>
        <input type="checkbox" disabled />
    </td>
</tr>
<tr>
    <td>
        <img
            src="https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg">
    </td>
    <td>
        <p>Sofa</p>
    </td>
    <td>
        <p>259</p>
    </td>
    <td>
        <p>1.2</p>
    </td>
    <td>
        <input type="checkbox" disabled />
    </td>
</tr>`;


export async function homePage(ctx) {
    const data = await getAllFurniture();
    console.log(data);

    ctx.render(homeTemplate());
}