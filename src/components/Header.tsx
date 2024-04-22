import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Button,
    Switch,
} from '@nextui-org/react'
import { IoSunny } from 'react-icons/io5'
import { IoMoon } from 'react-icons/io5'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { EsFlagIcon } from './Icons/EsFlagIcon'

function Header({}) {
    const [selectedKeys, setSelectedKeys] = useState(new Set(['Idioma']))

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
        [selectedKeys]
    )

    //collapsed coger estado en useState y modificar
    return (
        <Navbar>
            <NavbarContent justify="start">
                <NavbarItem>
                    <Switch
                        defaultSelected
                        size="lg"
                        color="secondary"
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <IoSunny className={className} />
                            ) : (
                                <IoMoon className={className} />
                            )
                        }
                    ></Switch>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>Generador de contraseñas</NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered" className="capitalize">
                                {selectedValue}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection example"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                        >
                            <DropdownItem
                                key="en"
                                startContent={<EsFlagIcon />}
                            >
                                Inglés
                            </DropdownItem>
                            <DropdownItem key="es">Español</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
