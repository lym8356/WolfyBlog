<script lang="ts">
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
    import '../styles/app.css';
    import '../styles/global.css';
</script>


<div class="app-wrapper">
    <Header />
    <slot></slot>
    <Footer />
</div>
