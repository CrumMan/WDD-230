async function main(){
    async function getInitialFruitsData() {
        const res = await fetch(url)
        const data = await res.json();
        return data
    }
    function calories_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons){
        const calorie_1=filtered_fruit_1_nutririons.calories
        const calorie_2=filtered_fruit_2_nutririons.calories
        const calorie_3=filtered_fruit_3_nutririons.calories
        const total=Math.round(calorie_1+calorie_2+calorie_3)
        return total
    }
    function carbohydrates_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons){
        const carbohydrates_1 = filtered_fruit_1_nutririons.carbohydrates
        const carbohydrates_2 = filtered_fruit_2_nutririons.carbohydrates
        const carbohydrates_3 = filtered_fruit_3_nutririons.carbohydrates
        const total=Math.round(carbohydrates_1+carbohydrates_2+carbohydrates_3)
        return total
    }
    function fats_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons){
        const fats_1 = filtered_fruit_1_nutririons.fat
        const fats_2 = filtered_fruit_2_nutririons.fat
        const fats_3 = filtered_fruit_3_nutririons.fat
        total = Math.round(fats_1 + fats_2 + fats_3)
        return total
    }
    function protien_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons){
        const protien_1 = filtered_fruit_1_nutririons.protein
        const protien_2 = filtered_fruit_2_nutririons.protein
        const protien_3 = filtered_fruit_3_nutririons.protein
        const total = Math.round(protien_1 + protien_2 + protien_3)
        return total
    }
    function sugar_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons){
        const sugar_1 = filtered_fruit_1_nutririons.sugar
        const sugar_2 = filtered_fruit_2_nutririons.sugar
        const sugar_3 = filtered_fruit_3_nutririons.sugar
        const total = Math.round(sugar_1 + sugar_2 + sugar_3)
        return total
    }
    let nurl = new URL(window.location);
    let params  = nurl.searchParams;

    // Remove this when you are done inspecting parameters in the console
    
    const names = params.get("names");
    const email = params.get("email")
    const phonenumber = params.get("phonenumber")
    const fruit_1 = params.get("fruit_1")
    const fruit_2 = params.get("fruit_2")
    const fruit_3 = params.get("fruit_3")
    const locations = params.get("location")
    const hidden = params.get("hide")
    const special_instructions = params.get("special_instructions")
    const url = "data/fruits.json";
    const fruit_list = await getInitialFruitsData();
    const filtered_fruit_1=fruit_list.filter(fruit => fruit.name === fruit_1)[0]
    const filtered_fruit_1_nutririons=filtered_fruit_1.nutritions
    // const nutrients_fruit_1=filtered_fruit_1.find(function("nutrients"))
    const filtered_fruit_2 = fruit_list.filter(fruit => fruit.name === fruit_2)[0]
    const filtered_fruit_2_nutririons = filtered_fruit_2.nutritions
    const filtered_fruit_3 = fruit_list.filter(fruit => fruit.name === fruit_3)[0]
    const filtered_fruit_3_nutririons=filtered_fruit_3.nutritions
    const calories = calories_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons)
    const carbohydrates = carbohydrates_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons)
    const fat = fats_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons)
    const protien = protien_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons)
    const sugar = sugar_total(filtered_fruit_1_nutririons,filtered_fruit_2_nutririons,filtered_fruit_3_nutririons)
    const msg = ("Thank you " + names + " for ordering your shake at the " + locations+"!" + " You ordered a "+ fruit_1 +" "+ fruit_2+" "+ fruit_3 +" shake!"+ " Your order will be prepared with conformation code " + hidden)
    const msg2 = (" Your Nutrients for your shake has " + calories + " Calories. It has also has " + carbohydrates + " grams of carbohydrates, " + fat +" grams of fat, " + protien + " grams of protien, and " + sugar + " grams of sugar")
    document.querySelector('#text').textContent = msg
    document.querySelector('#text2').textContent = msg2
}
main()