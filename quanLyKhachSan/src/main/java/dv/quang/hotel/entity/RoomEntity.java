/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dv.quang.hotel.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author dovan
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "tbl_room")
public class RoomEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomId;
    private String roomName;
    private String roomStatus;
    private String bed;
    @Column(columnDefinition = "text")
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "roomTypeId")
    private RoomTypeEntity roomType;
}
