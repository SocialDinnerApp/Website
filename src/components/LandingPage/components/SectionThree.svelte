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
        <h3 class="text-secondary">Weshalb solltest Du daran teilnehmen?</h3>
        <p class="text-light" style="margin-top: 15px">
            In Deutschland gibt es viele Studenten, welche in den meisten Fällen
            für das Studium in eine völlig neue Stadt gezogen sind und dort kaum
            Leute kennen. Dieses Problem lösen wir durch eine App, worüber
            ausschließlich Studenten an einem sogenannten “Running Dinner”-Event
            teilnehmen können. Dabei bekommen 2er-Teams entweder Vor-, Haupt-
            oder Nachspeise zugelost, wobei sie zwei andere Teams bei sich zuhause
            bekochen. Bei den verbleibenden zwei Speisen werden sie von fremden
            Teams bekocht. Dafür kannst Du einfach ein passendes Event in der
            App aussuchen und zur Teilnahme das Anmeldeformular ausfüllen.
        </p>
    </div>
</div>