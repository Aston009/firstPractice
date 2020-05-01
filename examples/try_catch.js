let json = '{"id":2}'

try {
    let user = JSON.parse(json);
    console.log(user);

    if(!user.name){
        throw new Error('Вэтих данных нет имени');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We got a error: ${error.name}`);

} finally {
    console.log("Я выполнюсь всегда");
}

console.log('Hello');