import React, { Component } from 'react';

export const ImcCalculator = (props) => {

    return (
      <div>
        <label>Seu Peso:
          <input
            autoFocus
            type="number"
            step="0.1"
            onKeyUp={props.onChangeWeight}
          />
        </label>
        <label>Sua Altura:
          <input
            type="number"
            step="0.1"
            onKeyUp={props.onChangeHeight}
          />
        </label>
        <span>Seu IMC é: {props.imc}</span>
      </div>
    )
}
