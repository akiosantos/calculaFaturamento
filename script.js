def calculadora():
    valor_mensal = float(input("Digite o valor mensal: "))
    base_calculo = float(input("Digite a base do cálculo mensal: "))
    meses = int(input("Digite o número de meses: "))
    
    saldo_total = valor_mensal * meses * base_calculo
    media_saldo = saldo_total / meses
    
    print("\nResultado:")
    print(f"Saldo total ao final de {meses} meses: R${saldo_total:.2f}")
    print(f"Média do saldo mensal: R${media_saldo:.2f}")

calculadora()
