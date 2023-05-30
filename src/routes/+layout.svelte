<script lang="ts">
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import "../styles/app.css";
    import "../styles/global.css";
</script>

<div class="app-wrapper layout">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>
