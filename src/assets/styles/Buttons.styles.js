import styled from 'styled-components'
import { backColors, btnColors, decoColors, orgColors } from '../themes/Colors.theme';


export const SmallButton = styled.button`
    min-width: 60px;
    padding: 1px;
    background: none;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        transition: .2s;
    }

    :focus {
        transition: none.2s;
    }
`;
const Button = styled.button`
    width: auto;
    padding: 4px 10px;
    background: none;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    :hover {
        transition: .2s;
    }

    :focus {
        transition: none.2s;
    }
`;

export const ButtonPage = styled(Button)`
    border: solid 1px black;
    background: #FFF;
    border-radius:"3px";
    cursor: "pointer";
    color: #000;  

    :hover {
        background: #299174;
        color: #FFF;
    }
    
    :active {
        background: ${orgColors.secondary_t8};        
    }
`;

export const Logout = styled(Button)`
    border: solid 2px ${decoColors.white};
    background: ${orgColors.primary};
    color: ${decoColors.white};
    
    :hover {
        background: ${orgColors.secondary};
        border: solid 2px ${orgColors.secondary};
    }
    
    :active {
        background: ${orgColors.secondary_t8};        
    }
`;


export const View = styled(Button)`
    border: solid 2px ${btnColors.primary};
    background: ${btnColors.primarytT1};
    color: ${btnColors.primary};

    :hover {
        background: ${btnColors.primary};
        color: ${btnColors.white};
    }
`;

export const SmallView = styled(SmallButton)`
    border: solid 2px ${btnColors.primary};
    background: ${btnColors.primaryT1};
    color: ${btnColors.primary};

    :hover {
        background: ${btnColors.primary};
        color: ${btnColors.white};
    }
`;

export const Add = styled(Button)`
    border: solid 2px ${btnColors.success};
    background: ${btnColors.successtT1};
    color: ${btnColors.success};

    :hover {
        background: ${btnColors.success};
        color: ${btnColors.white};
    }
`;

export const SmallAdd = styled(SmallButton)`
    border: solid 2px ${btnColors.success};
    background: ${btnColors.successT1};
    color: ${btnColors.success};

    :hover {
        background: ${btnColors.success};
        color: ${btnColors.white};
    }
`;

export const Save = styled(Button)`
    border: solid 2px ${btnColors.success};
    background: ${btnColors.success_1};
    color: ${btnColors.success};

    :hover {
        background: ${btnColors.success};
        color: ${btnColors.white};
    }
`;

export const SmallSave = styled(SmallButton)`
    border: solid 2px ${btnColors.success};
    background: ${btnColors.success_1};
    color: ${btnColors.success};

    :hover {
        background: ${btnColors.success};
        color: ${btnColors.white};
    }
`;

export const Edit = styled(Button)`
    border: solid 2px ${btnColors.warning};
    background: ${btnColors.warningT1};
    color: ${btnColors.warning};

    :hover {
        background: ${btnColors.warning};
        color: ${btnColors.white};
    }
`;

export const SmallEdit = styled(SmallButton)`
    border: solid 2px ${btnColors.warning};
    background: ${btnColors.warningT1};
    color: ${btnColors.warning};

    :hover {
        background: ${btnColors.warning};
        color: ${btnColors.white};
    }
`;

export const Delete = styled(Button)`
    border: solid 2px ${btnColors.danger};
    background: ${btnColors.dangerT1};
    color: ${btnColors.danger};

    :hover {
        background: ${btnColors.danger};
        color: ${btnColors.white};
    }
`;

export const SmallDelete = styled(SmallButton)`
    border: solid 2px ${btnColors.danger};
    background: ${btnColors.dangerT1};
    color: ${btnColors.danger};

    :hover {
        background: ${btnColors.danger};
        color: ${btnColors.white};
    }
`;

export const Cancel = styled(Button)`
    border: solid 2px ${btnColors.secondary};
    background: ${btnColors.secondaryT1};
    color: ${btnColors.secondary};

    :hover {
        background: ${btnColors.secondary};
        color: ${btnColors.white};
    }
`;

export const SmallCancel = styled(SmallButton)`
    border: solid 2px ${btnColors.secondary};
    background: ${btnColors.secondaryT1};
    color: ${btnColors.secondary};

    :hover {
        background: ${btnColors.secondary};
        color: ${btnColors.white};
    }
`;

export const File = styled.input`
    width: 100%;
    padding-bottom: 5px;

    ::-webkit-file-upload-button {
        width: 150px;
        padding: 2px;
        cursor: pointer;

        color: ${btnColors.primary};
        border-radius: 3px;
        border: 2px solid ${btnColors.primary};
        background: transparent;
        font-weight: bold;

        :hover {
            color: ${backColors.white};
            background: ${btnColors.primary};
            transition: .2s;
        }
    }
`;

export const SmallFile = styled.input`
    width: 100%;

    ::-webkit-file-upload-button {
        width: 150px;
        padding: 2px;
        cursor: pointer;

        color: ${btnColors.primary};
        border-radius: 3px;
        border: 2px solid ${btnColors.primary};
        background: transparent;
        font-weight: bold;

        :hover {
            color: ${backColors.white};
            background: ${btnColors.primary};
            transition: .2s;
        }
    }
`;


