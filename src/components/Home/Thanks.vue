<template>
    <section class="scene" id="thanks">
        <div class="static-container">

            <div class="std">
                <svg xmlns="http://www.w3.org/2000/svg" id="potion" viewBox="0 0 100 100">
                    <g class="potion-potion">
                        <g class="potion-vase">
                            <g class="potion-bottle">
                                <path fill="#00c8c8" d="M55.6 23.2H44.8c-2.1 0-3.8-1.8-3.8-3.8l.1-6.4c0-1.6 1.4-3 3-3l12.6.1c1.6 0 3 1.4 3 3l-.1 6.4c-.3 2-2 3.7-4 3.7z"/>
                                <path fill="#fff" d="M64.7 25.8c0-.2.2-6.2.2-6.2.1-2.2-1.8-4.1-4-4l-20.4-.1c-2.2 0-4 1.8-4 4.1 0 0 .1 5.9 0 6.2C25.8 31 18.6 42 18.6 54.7 18.4 72.5 32.6 87 50.1 87c17.5.1 31.9-14.3 32-32.2.1-12.8-7-23.7-17.4-29zm10.1 28.8c-.1 13.7-11.1 24.7-24.6 24.7-13.5-.1-24.4-11.2-24.3-24.9S37 29.7 50.5 29.7c13.4.1 24.4 11.2 24.3 24.9z" opacity=".8"/>
                                <path fill="#e8d7ef" d="M50.4 29.7c-13.5 0-24.5 11.1-24.6 24.7 0 13.7 10.8 24.9 24.3 24.9s24.5-11.1 24.6-24.7c.2-13.7-10.8-24.8-24.3-24.9z" opacity=".8"/>

                                <g class="potion-liquids">
                                    <path class="potion-liquid2" fill="#4612a5">
                                        <animate dur="1.6s"
                                                 repeatCount="indefinite"
                                                 attributeName="d"
                                                 values="M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;
                         M73.5 50.4c-.9-4.8-1 5.3-4.4 5.9-11 2-19.7-6.3-36-3.9-5.5.8-6.6 3.3-6.1 6.3 2.3 12.7 14.6 21.3 27.4 19 12.9-2.2 21.4-14.4 19.1-27.3z;
                         M73.5 50.4c-.9-4.8-4.5-4.5-7.9-3.8-9.9 1.8-23.5 13-31.1 14.3-5.4 1-8-5.2-7.4-2.2 2.3 12.7 14.6 21.3 27.4 19 12.8-2.2 21.3-14.4 19-27.3z;"
                                                 calcMode="spline"
                                                 keySplines="0.455 0.03 0.515 0.955;
                         0.455 0.03 0.515 0.955"/>
                                    </path>
                                    <path class="potion-liquid" fill="#5918df">
                                        <animate dur="1.4s"
                                                 repeatCount="indefinite"
                                                 attributeName="d"
                                                 values="M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;
                         M27.1 58.8c-.9-4.8 2.8 2.9 6.2 2.2 9.9-1.8 21.9-13.1 33-14.6 5.5-.7 6.6.9 7.1 3.9 2.3 12.7-6.2 25.1-19 27.4-12.7 2.5-24.9-6-27.3-18.9z;
                         M27.1 58.8c-.9-4.8 2.6-5.8 6.1-6.3 9.9-1.8 26.5 3.9 34.1 2.6 5.4-1 5.7-7.7 6.2-4.6 2.3 12.7-6.2 25.1-19 27.4-12.8 2.3-25-6.2-27.4-19.1z;"
                                                 calcMode="spline"
                                                 keySplines="0.455 0.03 0.515 0.955;
                         0.455 0.03 0.515 0.955"/>
                                    </path>
                                </g>
                            </g>
                            <g class="potion-drops">
                                <ellipse class="potion-drop2" cx="49.4" cy="37.5" fill="#5918df" rx="4.6" ry="4.6"/>
                                <ellipse class="potion-drop" cx="59.8" cy="42" fill="#5918df" rx="2.8" ry="2.8"/>
                            </g>
                        </g>
                    </g>
                </svg>
                

                <p>
                    Thanks for checking my website!
                   
                </p>
                <p class="-big">
                    Check out my
                    <router-link to="/" title="Work" class="-purple">selected works</router-link>
                    for more details.
                </p>
                <p>
                    I am available for new projects and a coffee <span class="-purple">;)</span>
                </p>
            </div>
            <div class="social_links">
            <div>
                <a href="https://twitter.com/alanchrisantony">
                    <svg :style="{height: '2rem'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/alanchrissantony">
                    <svg :style="{height: '2rem'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/alanchrissantony">
                    <svg :style="{height: '2rem'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://github.com/alanchrissantony">
                    <svg :style="{height: '2rem'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/alan-chris-antony-037819223">
                    <svg :style="{height: '2rem'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z" clip-rule="evenodd"/>
                    </svg>
                </a>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Thanks'
    }
</script>