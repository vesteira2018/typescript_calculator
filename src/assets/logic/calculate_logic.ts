export enum InputType {
  Numerical,
  Operator,
}

export enum OperatorType {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
  Equals = 'equals',
  Percent = 'percent',
  Square = 'square',
  Sqrt = 'sqrt',
  DivideAsX = 'divideasx',
  Point = 'point',
  Power = 'power',
  Abs = 'abs',
  SwitchSign = 'switchsign',
}

export type CalculateInput =
  | { type: InputType.Numerical; value: number }
  | { type: InputType.Operator; operator: OperatorType };

export type CalculateState = {
  displayValue: string;
}

export type Operation = {
  operator: OperatorType;
  value: number;
}

type OperationsBuilder = {
  operations: Operation[];
  working: Operation;
};

// TODO: 타입을 다양하게 사용하는 건 잘하셨어요. 하나를 잘 다루는 것도 중요하지만 다양한 경험도 필요합니다
// TODO: 다만 하나의 파일에 서로 다른 목적성을 띈 것들을 다 집어넣어 관리하는 것과, 하나하나 다 분리해서 관리하는 것
// TODO: 어떤 차이점이 있는지 알고 개발하시면 더 좋을 것 같습니다
// TODO: "이게 되네?"라는 느낌은 이제 조금씩 버려야죠.

const getOperationsBuilder = (inputs: Array<CalculateInput>): OperationsBuilder => {
  return inputs.reduce<OperationsBuilder>(
    (builder, input) => {
      switch (input.type) {
        case InputType.Numerical:
          const prevValue = builder.working?.value || 0;
          const newValue = prevValue * 10 + input.value;
          return {
            ...builder,
            working: { ...builder.working, value: newValue },
          };
        case InputType.Operator:
          if (input.operator === OperatorType.Equals) {
            return {
              operations: [
                ...builder.operations,
                builder.working,
                { operator: OperatorType.Equals, value: 0 },
              ],
              working: { operator: OperatorType.Add, value: 0 },
            };
          } else {
            return {
              operations: [...builder.operations, builder.working],
              working: { operator: input.operator, value: 0 },
            };
          }
      }
    },
    {
      operations: [],
      working: { operator: OperatorType.Add, value: 0 },
    }
  );
};

const getTotal = (operations: Array<Operation>): number =>
  operations.reduce<number>((sum, operation) => {
    switch (operation.operator) {
      case OperatorType.Add:
        return sum + operation.value;
      case OperatorType.Subtract:
        return sum - operation.value;
      case OperatorType.Multiply:
        return sum * operation.value;
      case OperatorType.Divide:
        return sum / operation.value;
      case OperatorType.Equals:
        return sum;
      case OperatorType.Percent:
        return sum * 0.01;
      case OperatorType.Square:
        return Math.pow(sum, 2);
      case OperatorType.Sqrt:
        return Math.sqrt(sum);
      case OperatorType.DivideAsX:
        return 1 / sum;
      case OperatorType.Point:
        return sum;
      case OperatorType.Power:
        return Math.pow(sum, operation.value);
      case OperatorType.Abs:
        return Math.abs(sum);
      case OperatorType.SwitchSign:
        return -(sum);
    }
  }, 0);

const getState = (inputs: Array<CalculateInput>): CalculateState => {
  const builder = getOperationsBuilder(inputs);
  const { operations } = builder;
  const lastOperation = operations.length ? operations[operations.length - 1] : null;
  if (!lastOperation) return { displayValue: builder.working.value.toString() };

  const lastInput = inputs.length ? inputs[inputs.length - 1] : null;

  switch (lastOperation.operator) {
    case OperatorType.Equals:
      return { displayValue: getTotal(operations).toString() };
    default:
      return { displayValue: lastInput && lastInput.type === InputType.Numerical ? builder.working.value.toString() : getTotal(operations).toString() };
  }
};

const CalculateLogic = {
  getOperationsBuilder,
  getState,
};

export default CalculateLogic;
