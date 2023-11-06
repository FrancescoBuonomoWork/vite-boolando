<script>
export default {
    name: 'FooterPage',
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
                        <li>X</li>
                        <li>F</li>
                        <li>I</li>
                        <li>P</li>
                        <li>Y</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
</template>

<style scoped lang="scss">
// @use './styles/general.scss';
.footer-page{
    padding-top: 20px;
    background-color: black;
    color: white;
    .footer-list{
        display: flex;
        gap: 6px;
        margin-top: 4px;
    }
}
</style>