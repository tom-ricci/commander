import optionMaker from "./options/option.js"

export default function(command) {
  let final = `@slash.slash(name="${command.name}", description="${command.description}"`;
  if(command.options.length > 0) {
    final += `, options=[`;
    for(let option of command.options) {
      option = optionMaker(option);
      final += `create_option(${option}),`;
    }
    final = final.substring(0, final.length - 1);
    final += `]`
  }
  final += `)
  
  
async def roll(ctx`;
  if(command.options.length > 0) {
    final += `, `;
    for(let option of command.options) {
      final += ` ${option.name},`
    }
    final = final.substring(0, final.length - 1);
  }
  final += `):
  # your code here`
  return final;
}