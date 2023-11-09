<script>
export default {
    name: 'FooterPage',
    data() {
        return {
            iconListFooter: [
                {
                    link: '#',
                    icon: "fa-brand fa-twitter"
                },
                {
                    link: '#',
                    icon: "fa-brand fa-facebook"
                },
                {
                    link: '#',
                    icon: "fa-brand fa-instagram"
                },
                {
                    link: '#',
                    icon: "fa-brand fa-pintrest"
                },
                {
                    link: '#',
                    icon: "fa-brand fa-youtube"
                }
            ]
        }
    }
}
</script>

<template>
    <footer class="footer-page">
        <div class="container">
            <div class="row ds-flex-center">
                <div class="col">
                    <h6>Booleando s.r.l.</h6>
                    <ul class="footer-list">
                        <li>Informazioni legali</li>
                        <li>Informativa sulla privacy</li>
                        <li>Diritto di recesso</li>
                    </ul>

                </div>
                <div class="col">
                    <h6>Trovaci anche su</h6>
                    <ul class="footer-list">
                        <li v-for="iconF in iconListFooter" >
                            <a :href="iconF.link">
                                <font-awesome-icon :icon= iconF.icon />
                            </a>
                        </li>
                        <!-- <li>F</li>
                        <li>I</li>
                        <li>P</li>
                        <li>Y</li> -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
// @use './styles/general.scss';
.footer-page {
    padding-top: 20px;
    background-color: black;
    color: white;

    .footer-list {
        display: flex;
        gap: 6px;
        margin-top: 4px;
    }
}
</style>