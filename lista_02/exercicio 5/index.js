import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class UserEditor extends JFrame {

    private JTable table;
    private DefaultTableModel tableModel;
    private JTextField idField;
    private JTextField nameField;
    private JTextField emailField;

    public UserEditor() {
        setTitle("Editor de Usuários");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        String[] columnNames = {"ID", "Nome", "Email", "Ações"};
        Object[][] data = {
            {1, "João Silva", "joao@example.com", "Editar"},
            {2, "Maria Oliveira", "maria@example.com", "Editar"}
        };

        tableModel = new DefaultTableModel(data, columnNames) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return column == 3; // Só a coluna "Ações" é editável
            }
        };
        table = new JTable(tableModel);
        table.getColumn("Ações").setCellRenderer(new ButtonRenderer());
        table.getColumn("Ações").setCellEditor(new ButtonEditor(new JCheckBox()));

        JScrollPane scrollPane = new JScrollPane(table);
        add(scrollPane, BorderLayout.CENTER);

        JPanel editPanel = new JPanel(new GridLayout(4, 2));
        editPanel.add(new JLabel("ID:"));
        idField = new JTextField();
        idField.setEditable(false);
        editPanel.add(idField);
        editPanel.add(new JLabel("Nome:"));
        nameField = new JTextField();
        editPanel.add(nameField);
        editPanel.add(new JLabel("Email:"));
        emailField = new JTextField();
        editPanel.add(emailField);
        JButton saveButton = new JButton("Salvar");
        saveButton.addActionListener(new SaveButtonListener());
        editPanel.add(saveButton);
        add(editPanel, BorderLayout.SOUTH);
    }

    private class SaveButtonListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int id = Integer.parseInt(idField.getText());
            String name = nameField.getText();
            String email = emailField.getText();

            for (int i = 0; i < tableModel.getRowCount(); i++) {
                if ((int) tableModel.getValueAt(i, 0) == id) {
                    tableModel.setValueAt(name, i, 1);
                    tableModel.setValueAt(email, i, 2);
                    break;
                }
            }

            idField.setText("");
            nameField.setText("");
            emailField.setText("");
        }
    }

    private class ButtonRenderer extends JButton implements TableCellRenderer {
        public ButtonRenderer() {
            setText("Editar");
        }

        @Override
        public Component getTableCellRendererComponent(JTable table, Object value,
                                                       boolean isSelected, boolean hasFocus, int row, int column) {
            return this;
        }
    }

    private class ButtonEditor extends DefaultCellEditor {
        private JButton button;
        private String label;
        private boolean isPushed;

        public ButtonEditor(JCheckBox checkBox) {
            super(checkBox);
            button = new JButton();
            button.setOpaque(true);
            button.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    fireEditingStopped();
                }
            });
        }

        @Override
        public Component getTableCellEditorComponent(JTable table, Object value,
                                                     boolean isSelected, int row, int column) {
            label = (value == null) ? "Editar" : value.toString();
            button.setText(label);
            isPushed = true;
            int id = (int) table.getValueAt(row, 0);
            String name = (String) table.getValueAt(row, 1);
            String email = (String) table.getValueAt(row, 2);

            idField.setText(String.valueOf(id));
            nameField.setText(name);
            emailField.setText(email);

            return button;
        }

        @Override
        public Object getCellEditorValue() {
            if (isPushed) {
                // Ação quando o botão é clicado
            }
            isPushed = false;
            return label;
        }

        @Override
        public boolean stopCellEditing() {
            isPushed = false;
            return super.stopCellEditing();
        }

        @Override
        protected void fireEditingStopped() {
            super.fireEditingStopped();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            UserEditor editor = new UserEditor();
            editor.setVisible(true);
        });
    }
}
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class UserEditor extends JFrame {

    private JTable table;
    private DefaultTableModel tableModel;
    private JTextField idField;
    private JTextField nameField;
    private JTextField emailField;

    public UserEditor() {
        setTitle("Editor de Usuários");
        setSize(600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        String[] columnNames = {"ID", "Nome", "Email", "Ações"};
        Object[][] data = {
            {1, "João Silva", "joao@example.com", "Editar"},
            {2, "Maria Oliveira", "maria@example.com", "Editar"}
        };

        tableModel = new DefaultTableModel(data, columnNames) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return column == 3; // Só a coluna "Ações" é editável
            }
        };
        table = new JTable(tableModel);
        table.getColumn("Ações").setCellRenderer(new ButtonRenderer());
        table.getColumn("Ações").setCellEditor(new ButtonEditor(new JCheckBox()));

        JScrollPane scrollPane = new JScrollPane(table);
        add(scrollPane, BorderLayout.CENTER);

        JPanel editPanel = new JPanel(new GridLayout(4, 2));
        editPanel.add(new JLabel("ID:"));
        idField = new JTextField();
        idField.setEditable(false);
        editPanel.add(idField);
        editPanel.add(new JLabel("Nome:"));
        nameField = new JTextField();
        editPanel.add(nameField);
        editPanel.add(new JLabel("Email:"));
        emailField = new JTextField();
        editPanel.add(emailField);
        JButton saveButton = new JButton("Salvar");
        saveButton.addActionListener(new SaveButtonListener());
        editPanel.add(saveButton);
        add(editPanel, BorderLayout.SOUTH);
    }

    private class SaveButtonListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            int id = Integer.parseInt(idField.getText());
            String name = nameField.getText();
            String email = emailField.getText();

            for (int i = 0; i < tableModel.getRowCount(); i++) {
                if ((int) tableModel.getValueAt(i, 0) == id) {
                    tableModel.setValueAt(name, i, 1);
                    tableModel.setValueAt(email, i, 2);
                    break;
                }
            }

            idField.setText("");
            nameField.setText("");
            emailField.setText("");
        }
    }

    private class ButtonRenderer extends JButton implements TableCellRenderer {
        public ButtonRenderer() {
            setText("Editar");
        }

        @Override
        public Component getTableCellRendererComponent(JTable table, Object value,
                                                       boolean isSelected, boolean hasFocus, int row, int column) {
            return this;
        }
    }

    private class ButtonEditor extends DefaultCellEditor {
        private JButton button;
        private String label;
        private boolean isPushed;

        public ButtonEditor(JCheckBox checkBox) {
            super(checkBox);
            button = new JButton();
            button.setOpaque(true);
            button.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    fireEditingStopped();
                }
            });
        }

        @Override
        public Component getTableCellEditorComponent(JTable table, Object value,
                                                     boolean isSelected, int row, int column) {
            label = (value == null) ? "Editar" : value.toString();
            button.setText(label);
            isPushed = true;
            int id = (int) table.getValueAt(row, 0);
            String name = (String) table.getValueAt(row, 1);
            String email = (String) table.getValueAt(row, 2);

            idField.setText(String.valueOf(id));
            nameField.setText(name);
            emailField.setText(email);

            return button;
        }

        @Override
        public Object getCellEditorValue() {
            if (isPushed) {
                // Ação quando o botão é clicado
            }
            isPushed = false;
            return label;
        }

        @Override
        public boolean stopCellEditing() {
            isPushed = false;
            return super.stopCellEditing();
        }

        @Override
        protected void fireEditingStopped() {
            super.fireEditingStopped();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            UserEditor editor = new UserEditor();
            editor.setVisible(true);
        });
    }
}
