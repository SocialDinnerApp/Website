<script lang="ts">
    import { fade } from "svelte/transition"
</script>

<div class="row justify-content-start align-items-center">
    <div class="col-lg-6" in:fade="{{ delay: 400, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <img
            src="images/landingpage_3.png"
            alt="Have fun"
            class="img-fluid"
            style="margin-left: -12px;"
        />
    </div>
    <div class="col-lg-6" in:fade="{{ delay: 400, duration: 1000 }}" out:fade="{{ delay: 0, duration: 0}}">
        <h3 class="text-secondary">Wie funktioniert das?</h3>
        <p class="text-light" style="margin-top: 15px">
            Das Social Dinner Event ist eine Möglichkeit als Student mit wenigen
            Schritten viele Kommilitonen kennenzulernen. Ob ihr ein gutes Essen
            genießen oder neue Leute kennenlernen wollt, hier seid ihr richtig.
            Wir wissen, dass es immer schwierig ist neue Leute kennenzulernen,
            deshalb sind wir da, um diese Hürde zu umgehen.
        </p>
    </div>
</div>