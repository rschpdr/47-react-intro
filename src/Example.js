// JSX => é uma extensão de sintaxe do Javascript que permite escrever HTML dentro de funções

// Componentes de classe (stateful) e componentes funcionais (stateless) ou componentes de apresentação

// Componente é uma função ou uma classe que retorna JSX

const greeting = "Hello!";
const student = { firstName: "Igor", lastName: "Almeida" };

const fruits = ["banana", "apple", "pineapple", "papaya"];

function Example() {
  // Toda função que vai ser invocada dentro do JSX obrigatoriamente precisa retornar JSX (elementos HTML)
  function renderList() {
    return fruits.map((fruit) => {
      return <li>{fruit}</li>;
    });
  }

  function renderButton(shouldRenderButton) {
    if (shouldRenderButton) {
      return <button>Click me!</button>;
    } else {
      return null;
    }
  }

  // O valor de retorno de um componente obrigatoriamente precisa ser somente uma tag (elemento) HTML
  return (
    <div>
      {/* Quando quisermos interpolar variáveis ou expressões no nosso HTML, precisamos de um par de chaves no JSX. O par de chaves delimita uma expressão Javascript comum, então valem as regras de sintaxe existentes */}
      {greeting + ` ${student.firstName} ${student.lastName}`}

      {/* Invocações de função também precisam de um par de chaves */}
      <ul>{renderList()}</ul>

      {/* Não é possível fazer statements (if, else, while, for, switch) dentro do JSX. Quando precisarmos usar algum statement, precisamos criar uma função à parte. */}
      {/* {if (shouldRenderButton) {
            return <button>Click me!</button>;
          } else {
            return null;
          }
      } */}

      {renderButton(true)}

      {/* No JSX usamos className ao invés de class para declarar classes do CSS pois class é uma palavra reservada no Javascript */}
      <div className="red"></div>

      {/* Atributos de tags dentro do JSX sempre são strings. Caso você queira passar um atributo que não seja uma string, é necessário usar o par de chaves */}

      {/* Atributo do tipo string */}
      <div className="blue"> </div>
      {/* Atributo do tipo expressão Javascript */}
      <div className={greeting === "Olá!" ? "red" : "blue"}> </div>
      {/* Atributo do tipo number */}
      <input type="number" max={10} />
      {/* Atributo do tipo boolean */}
      <input required={true} />
    </div>
  );
}

export default Example;
