import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './signin.css'
import bird from "../../utils/img/—Pngtree—watercolor color bird camera elements_4263242.png"


export default function SignIn() {

    return(
        <div>
            <Grid>
                    <div class="grid-container">
                        <div class="grid-1">
                            <div class="box">
                                <div class='div-image'>
                                    <img alt="bird" src={bird} className="bird" />
                                </div>
                                <div class='div-signin'>
                                    <div>
                                        <div className='title'>
                                            <p>MusBird</p>
                                        </div>
                                        <div className='welcome'>
                                            <p>Welcome to MusBird</p>
                                        </div>
                                        <div className='Form'>
                                            <form className='Form'>
                                                <input
                                                type='text'
                                                placeholder='Number or E-mail'>
                                                </input>
                                            </form>
                                        </div>
                                        <div className="Button-signIn">
                                            <button onClick={() => alert('Undefined')}size="large" className='but'>
                                              Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid-2"></div>
                    </div>
            </Grid>
        </div>

    )
}
