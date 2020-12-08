import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './signin.css'
import bird from "../../utils/img/—Pngtree—watercolor color bird camera elements_4263242.png"
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


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
                                        <div className='TextField'>
                                            <TextField
                                            required
                                            id="outlined-required"
                                            label="Number or E-mail"
                                            placeholder="Enter your Number or E-mail"
                                            variant="outlined"
                                            />
                                        </div>
                                        <div className="Button-signIn">
                                            <Button size="large" className='but'>
                                              Login
                                            </Button>
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
